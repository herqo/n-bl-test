const animationEnd = (function (el) {
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd'
  };
  for (const t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$('#myButton').click((e) => {
  const username = $('#Username').val();
  const email = $('#Email').val();
  const password = $('#Password').val();
  // if (username === '' && email === '' && password === '') {
  
  const Username = $('#Username');
  const Email = $('#Email');
  const Password = $('#Password');
  const UsernameRemove = Username.one(animationEnd, () => {
    Username.removeClass('animated shake');
  });

  const EmailRemove = Email.one(animationEnd, () => {
    Email.removeClass('animated shake');
  });

  const PasswordRemove = Password.one(animationEnd, () => {
    Password.removeClass('animated shake');
  });
  
  if (username === '' && password === '' && email === '') {
    e.preventDefault();
    Username.addClass('animated shake');
    Email.addClass('animated shake');
    Password.addClass('animated shake');
    UsernameRemove;
    EmailRemove;
    PasswordRemove;
    console.log('Her Ala  Bos')
  } else if (username === '' && password !== '' && email !== '') {
    e.preventDefault();
    Username.addClass('animated shake');
    UsernameRemove;
    console.log('Email ve Password Alani Bos');
  } else if (username === '' && password === '' && email !== '') {
    e.preventDefault();
    Username.addClass('animated shake');
    Password.addClass('animated shake');
    UsernameRemove;
    PasswordRemove;
    console.log('Usernmae Ve Password alani Bos');
  } else if (username === '' && password !== '' && email === '') {
    e.preventDefault();
    Username.addClass('animated shake');
    Email.addClass('animated shake');
    UsernameRemove;
    EmailRemove;
    console.log('Username ve Email Alani Bos');
  }

  if (username !== '' && password === '' && email === '') {
    e.preventDefault();
    Email.addClass('animated shake');
    Password.addClass('animated shake')
    EmailRemove;
    PasswordRemove;
    console.log('Email Ve Password alani Bos');
  } else if (username !== '' && password !== '' && email === '') {
    e.preventDefault();
    Email.addClass('animated shake');
    EmailRemove;
    console.log('Sadece Email Alani Bos');
  } else if (username !== '' && password === '' && email !== '') {
    e.preventDefault();
    Password.addClass('animated shake');
    PasswordRemove;
    console.log('Sadece Password Alani Bos');
  }

});
