require 'request'

class ComicsController < ApplicationController
  

  # GET /comics
  # GET /comics.json
  def index
  end

   # GET /comics
  # GET /comics.json
  def latest
    @comic = Request.new.get_latest_comic

    render :latest
  end

  # GET /comics/1
  # GET /comics/1.json
  def search
    @comic = Request.find(params[:num])

    render :search
  end

  # GET /comics/1
  # GET /comics/1.json
  # def show
  # end

  # GET /comics/new
  # def new
  #   @comic = Comic.new
  # end

  # GET /comics/1/edit
  # def edit
  # end

  # POST /comics
  # POST /comics.json
  def create
    @comic = Comic.new(comic_params)

    respond_to do |format|
      if @comic.save
        format.html { redirect_to @comic, notice: 'Comic was successfully created.' }
        format.json { render :show, status: :created, location: @comic }
      else
        format.html { render :new }
        format.json { render json: @comic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comics/1
  # PATCH/PUT /comics/1.json
  def update
    respond_to do |format|
      if @comic.update(comic_params)
        format.html { redirect_to @comic, notice: 'Comic was successfully updated.' }
        format.json { render :show, status: :ok, location: @comic }
      else
        format.html { render :edit }
        format.json { render json: @comic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comics/1
  # DELETE /comics/1.json
  def destroy
    @comic.destroy
    respond_to do |format|
      format.html { redirect_to comics_url, notice: 'Comic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comic
      @comic = Comic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comic_params
      params.require(:comic).permit(:month, :num, :link, :year, :news, :safe_title, :transcript, :alt, :img, :title, :day)
    end
end
