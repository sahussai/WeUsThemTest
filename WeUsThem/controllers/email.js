const Email = require('../models/email').Email;
const archivedEmail = require('../models/email').ArchivedEmail;



exports.getEmails = function(req, res, next) {
    Email.find({}, function(err, emails) {
        if(err){
            console.log('Error getting emails');
            console.log(err);
            next();
        }
        //console.log(emails.length);
        res.render('index', {emails: emails});
    });
};



exports.getEmailsBySender = function(req, res, next) {
    const sender = req.body.params;
    console.log(sender);
    Email.find({sender: sender}, function(err, emails) {
        if (err) {
            console.log('error getting emails from sender');
            console.log(err);
            next();
        }
        res.render('index', {emails: emails});
    });
};

exports.sendEmail = function (req, res, next) {
    let email = new Email(
        {
            sender: req.body.sender,
            sentTo: req.body.sentTo,
            title: req.body.title,
            emailBody: req.body.emailBody
        }
    );
    console.log(req.body);

    email.save(function (err) {
        if (err) {
            console.log(err);
            next();
        }
        res.redirect('/email');
        //res.send('Email saved in Database!')
    })
};


exports.readEmail = function(req, res, next) {
    console.log('read email');
    const emailID = req.params.id;
    //console.log(emailID);
    Email.findById(emailID, function(err, email) {
        if (err) {
            console.log("Error retrieving email.");
            console.log(err);
            next();
        }
        res.render('readEmail', {email:email});
    });
};


exports.deleteEmail = function(req, res, next) {
    console.log('delete email');
    const emailID = req.params.id;
    Email.findOneAndRemove(emailID, function(err) {
        if(err) {
            console.log('Error Deleting email');
            console.log(err);
            next();
        }
        console.log('Email deleted from database');
        //res.send('Email deleted from database');
        res.redirect('/email');
    });
};


exports.archiveEmail = function(req, res, next) {
    const emailID = req.params.id;
    // let email = new archivedEmail(
    //     {
    //         sender: req.body.sender,
    //         sentTo: req.body.sentTo,
    //         title: req.body.title,
    //         emailBody: req.body.emailBody,
    //         archived: true
    //     }
    // );
    // //console.log(req.body);

    // email.save(function (err) {
    //     if (err) {
    //         console.log(err);
    //         next();
    //     }
    // });
    // console.log('Archived Email');
    // console.log(email);
    let filter = {_id:emailID};
    let update = {archived: true};
    let updatedEmail = Email.findByIdAndUpdate(emailID, update, {
        new:true
    }, (err, data) => {
        if (err) {
            console.log('error')
            return done(err, data);
        }
        //return done(null, data);
      });
    console.log('Updated')
    console.log(updatedEmail);
    res.redirect('/email');

};

exports.composeEmail = function(req, res, next) {
    res.render('compose');
}