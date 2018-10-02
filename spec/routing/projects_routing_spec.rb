require "rails_helper"

RSpec.describe V1::ProjectsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/projects").to route_to("v1/projects#index")
    end

    it "routes to #show" do
      expect(:get => "/projects/1").to route_to("v1/projects#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/projects").to route_to("v1/projects#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/projects/1").to route_to("v1/projects#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/projects/1").to route_to("v1/projects#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/projects/1").to route_to("v1/projects#destroy", :id => "1")
    end
  end
end
