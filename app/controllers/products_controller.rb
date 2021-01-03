class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    product
  end

  # def new
  #   @product = Product.new
  # end
  #
  # def create
  #   product = Product.new(products_params)
  #   if product.save
  #     redirect_to product
  #   else
  #     pp 'error' + product
  #   end
  # end
  def search
    @search = params[:search]
    @products = Product.where("title LIKE '%#{params[:search]}%' OR body LIKE '%#{params[:search]}%'" )
  end

  private
  def product
    @product ||= Product.find(params[:id])
  end

  def products_params
    params.require(:product).permit(:title, :body, :image, :genre, :developer, :age_limit)
  end
end
