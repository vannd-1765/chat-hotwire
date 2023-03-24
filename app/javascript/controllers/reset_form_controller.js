import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  reset() {
    console.log( 'form_controller.js connected' )
    
    this.element.reset()
  }
}
