

function get_event()
{


var test_opts={

consumer: {public:"zrB43B3MSYDfY3kkK6",secret:"ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7"},
signature_method:  'PLAINTEXT',
nonce_length:   29  ,
version:  '1.0'    ,
parameter_seperator: ', ' ,

};

var myoauth=new OAuth(test_opts);

myoauth.nonce=myoauth.getNonce();

myoauth.signature=myoauth.consumer.public+'%26' ;

myoauth.timestamp=myoauth.getTimeStamp();

var my_event_string='https://bitbucket.org/api/1.0/repositories/sd108806/bb/events/?'
+"oauth_signature_method="+myoauth.signature_method+"&"
+'oauth_nonce='+myoauth.nonce+'&'
+"oauth_timestamp="+myoauth.timestamp+"&"
+"oauth_version="+myoauth.version+"&"
+'oauth_consumer_key='+myoauth.consumer.public+'&'
+"oauth_signature="+myoauth.signature



document.write('my_event_string  ' + my_event_string+'<br/>');















}