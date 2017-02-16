const
    express = require('express'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    mailgun = require('nodemailer-mailgun-transport')
;

const auth = {
    auth: {
        api_key: 'key-c4079fa7165f8d35b9cd510ef185828f',
        domain: 'mailgun.yayo.fr'
    }
};

const
    mailer = nodemailer.createTransport(mailgun(auth)),
    app = express()
;

app
    .set('view engine', 'pug')
    .use(bodyParser.urlencoded({extended: false}))

    .get("/", (req, res) => res.render('index', {success: req.query.success}))
    .post("/", (req, res) => {

        const mailParams = {
            from: 'test@yayo.fr',
            to: 'contact@yayo.fr',
            subject: req.body.subject,
            html: req.body.message,
        };

        mailer.sendMail(mailParams, (err, info) => {
            if (err)
                return res.status(500).json(err);
            return res.redirect("/?success=true");
        })
    })

    .listen(8080, (err) => {
        if (err)
            throw err;
        console.log("Listening on port 8080");
    })
;

