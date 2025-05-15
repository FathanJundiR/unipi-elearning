import Swal from "sweetalert2"

class GenService {
  static alertSuccess(message:string) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    })
  }

  static alertError(message:string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops',
      text: message
    })
  }
}

export default GenService;