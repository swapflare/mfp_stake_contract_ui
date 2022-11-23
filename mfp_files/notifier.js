function notifier(msg,note_type='info',notifier_position_class='notifier_top_right',flash=true){
	var time_lapse=5000;
	var notifier=$('#notifier');
	var notifier_class='alert alert-';
	notifier_class+=note_type+' '+notifier_position_class;
	notifier.text(msg);
	notifier.attr('class',notifier_class);
	notifier.slideDown('normal');
	if(flash) setTimeout(function(){notifier.hide()},time_lapse);
}
function notifier_noflash(msg,note_type='info',notifier_position_class='notifier_top_right',flash=false){
	notifier(msg,note_type,notifier_position_class,flash);
}
