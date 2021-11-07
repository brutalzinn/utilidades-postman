const options = {
  url:  pm.environment.get('auth_url'), 
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
  },
body: {
     mode: 'raw',
     raw: JSON.stringify({ email: pm.environment.get('email'), senha: pm.environment.get('senha') })
  }
};
pm.sendRequest(options, function (err, res) {
    pm.environment.set("token", res.json().token );
});
