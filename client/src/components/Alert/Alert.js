import swal from 'sweetalert2';

const SwalAlert = swal.mixin({
  confirmButtonClass: 'btn btn-popup btn-yellow',
  cancelButtonClass: 'btn btn-popup btn-gray mr-3',
  backdrop: `rgba(74, 74, 74, 0.5)`,
  showCloseButton: true,
  buttonsStyling: false,
  reverseButtons: true,
});

const SwalAlertSuccess = swal.mixin({
  confirmButtonClass: 'btn btn-popup btn-yellow',
  cancelButtonClass: 'btn btn-popup btn-gray mr-3',
  backdrop: `rgba(74, 74, 74, 0.5)`,
  showCloseButton: true,
  buttonsStyling: false,
  reverseButtons: true,
  imageWidth: 88,
  imageHeight: 88,
});

export { SwalAlert, SwalAlertSuccess };