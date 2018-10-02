require 'rails_helper'

RSpec.describe "Projects API", type: :request do
  let!(:user) { create(:user_with_projects, projects_count: 5) }
  let(:token) { Knock::AuthToken.new(payload: { sub: user.id }).token }
  let!(:projects) { user.projects }
  let(:id) { projects.first.id }
  let(:valid_attributes) { attributes_for(:project).merge({:user_id => user.id}) }

  # GET /projects
  describe "GET /projects" do

    context 'when logged in' do
      before { get '/projects', headers: { 'Authorization': "Bearer #{token}" } }

      it 'returns projects' do
        expect(json).not_to be_empty
        expect(json.size).to eq(5)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when logged out' do
      before { get '/projects', headers: { 'Authorization': nil } }
      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  # GET /projects/:id
  describe 'GET /projects/:id' do
    before { get "/projects/#{id}", headers: { 'Authorization': "Bearer #{token}" } }

    context 'when the record exists' do
      it 'returns the project' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Project/)
      end
    end
  end

  # POST /projects
  describe "POST /projects" do

    context 'when the request is valid' do
      before { post '/projects', params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" }}

      it 'creates a project' do
        expect(json.deep_symbolize_keys.except(:id, :created_at, :tasks, :task_count)).to eq(valid_attributes)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/projects', params: valid_attributes.except(:name), headers: { 'Authorization': "Bearer #{token}" } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # PUT /projects/:id
  describe "PUT /projects/:id" do
    context 'when the record exists' do
      before { put "/projects/#{id}", params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" } }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end
  
  # DELETE /projects/:id
  describe "DELETE /projects/:id" do
    before { delete "/projects/#{id}", headers: { 'Authorization': "Bearer #{token}" } }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end