class ProductsController < ApplicationController
  def index
    @products = Product.all
    paginate
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
    @filter = params[:filter]
    @products = @filter == '' ? Product.all : Product.where('age_limit <= ?', @filter.to_i)
    @products = @products.where("title LIKE '%#{params[:search]}%' OR body LIKE '%#{params[:search]}%'")
    paginate
  end

  private

  def paginate
    @products = @products.paginate(page: params[:page], per_page: 10).with_attached_image.includes(:categories)
  end

  def product
    @product ||= Product.find(params[:id])
  end

  def products_params
    params.require(:product).permit(:title, :body, :image, :genre, :developer, :age_limit)
  end
end
