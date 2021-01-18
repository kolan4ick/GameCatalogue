class CallMesController < ApplicationController
  def create
    call_me = CallMe.new(call_mes_params)
    if call_me.save
      redirect_back(fallback_location: root_path)
    else
      pp 'error'
    end
  end

  private

  def call_mes_params
    params.require(:call_me).permit(:phone)
  end
end
