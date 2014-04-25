require 'spec_helper'

describe 'the site' do
  describe 'a new user visits the homepage' do
    it 'displays Macarena', js: true do
      visit root_path
      page.find("h1", :text => "Hey Macarena").click
      expect(page).to have_content "ANERACAM YEH";
    end
  end
end
