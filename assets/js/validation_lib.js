class Val{


  static isEmpty(element) {
    if(element.value === ''){
      element.classList.add('is-invalid')
      return true;
    }else{
      element.classList.remove('is-invalid')
      return false;
    }
  }
}

export default Val;