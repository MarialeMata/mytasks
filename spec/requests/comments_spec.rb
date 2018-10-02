require 'rails_helper'

RSpec.describe "Comments API", type: :request do
  let!(:comment) { create(:comment) }
  let(:id) { comment.id }
  let!(:user) { create(:user) }
  let(:token) { Knock::AuthToken.new(payload: { sub: user.id }).token }
  let!(:task) { create(:task) }
  let(:task_id) { task.id }
  let(:valid_attributes) { attributes_for(:comment).merge({
    :user_id => user.id,
    :task_id => task.id}) }

  # # PUT /comments/:id
  # describe "PUT /comments/:id" do
  #   context 'when the record exists' do
  #     before { put "/comments/#{id}", params: valid_attributes }

  #     it 'updates the record' do
  #       expect(response.body).to be_empty
  #     end

  #     it 'returns status code 204' do
  #       expect(response).to have_http_status(204)
  #     end
  #   end
  # end

  # POST /tasks/:task_id/comments
  describe 'POST /tasks/:task_id/comments' do

    context 'when request attributes are valid' do
      before { post "/tasks/#{task_id}/comments", params: valid_attributes, headers: { 'Authorization': "Bearer #{token}" } }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/tasks/#{task_id}/comments", params: valid_attributes.except(:text), headers: { 'Authorization': "Bearer #{token}" } }
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Text can't be blank/)
      end
    end
  end
  
  # DELETE /comments/:id
  describe "DELETE /comments/:id" do
    before { delete "/comments/#{id}", headers: { 'Authorization': "Bearer #{token}" } }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end
