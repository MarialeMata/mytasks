require 'rails_helper'

RSpec.describe "Tasks API", type: :request do
  let!(:user) { create(:user_with_tasks, tasks_count: 5) }
  let(:token) { Knock::AuthToken.new(payload: { sub: user.id }).token }
  let!(:project) { create(:project) }
  # let!(:tasks) { create_list(:task, 4) }
  let!(:tasks) { user.tasks }
  let(:id) { tasks.first.id }
  let(:priority) { Priority.create(name: 'Important') }
  let(:status) { Status.create(name: 'Active') }
  let(:valid_attributes) { attributes_for(:task).merge({
    :project_id => project.id,
    :priority_id => priority.id,
    :status_id => status.id,
    :user_id => user.id}) }
  let(:project_id) { project.id }

  # GET /tasks
  describe "GET /tasks" do
    before { get '/tasks', headers: { 'Authorization': "Bearer #{token}" } }

    it 'returns tasks' do
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # GET /tasks/:id
  describe 'GET /tasks/:id' do
    before { get "/tasks/#{id}", headers: { 'Authorization': "Bearer #{token}" } }

    context 'when the record exists' do
      it 'returns the task' do
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
        expect(response.body).to match(/Couldn't find Task/)
      end
    end
  end

  # POST /tasks
  describe "POST /tasks" do

    context 'when the request is valid' do
      before { post '/tasks', params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" } }

      it 'creates a task' do
        expect(json.deep_symbolize_keys.except(:id, :comments, :comment_count, :project_name, :status, :priority)).to eq(valid_attributes)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/tasks', params: valid_attributes.except(:title), headers: { 'Authorization': "Bearer #{token}" } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  # POST /projects/:project_id/tasks
  describe 'POST /projects/:project_id/tasks' do

    context 'when request attributes are valid' do
      before { post "/projects/#{project_id}/tasks", params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" } }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/projects/#{project_id}/tasks", params: valid_attributes.except(:title), headers: { 'Authorization': "Bearer #{token}" } }
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  # PUT /tasks/:id
  describe "PUT /tasks/:id" do
    context 'when the record exists' do
      before { put "/tasks/#{id}", params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" } }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # DELETE /tasks/:id
  describe "DELETE /tasks/:id" do
    before { delete "/tasks/#{id}", headers: { 'Authorization': "Bearer #{token}" } }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end
