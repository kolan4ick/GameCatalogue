ActiveAdmin.register Product do
  action_item :import, except: :import do
   link_to t('import'), admin_products_import_path
 end

 controller do
    def import; end

    def import_file
      Product.import(params[:file])
      redirect_to admin_products_path
    end
  end


  permit_params :title, :body, :genre, :image, :developer, :category_names, :age_limit, :categories
  form do |f|
    f.inputs do
      f.input :title
      f.input :category_names
      f.input :body, as: :text
      f.input :image, as: :file
      f.input :genre
      f.input :developer
      f.input :age_limit
    end
    f.actions
  end
  show do |_product|
    attributes_table do
      row :title
      row :categories
      row :body do
        _product.body.to_s
      end
      row :genre
      row :developer
      row :age_limit
      row :image do |img|
        image_tag img.photo, width:300, height:300
      end
    end
  end
  # or
  #
  # permit_params do
  #   permitted = []
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
