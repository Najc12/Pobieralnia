/* WEBHOOK */

const webhook =
"https://discord.com/api/webhooks/1509192152163549234/JEl7-QuaZWf7-IrsW7v9MG0iLCxjbrWzr4UoOSO4ug70HOKj0d5ggtat26dGkBZzceAy";

/* DATA */

const today =
new Date();

/* HASŁO */

const password =
"Craftea-" +
today.getDate() +
(today.getMonth()+1) +
today.getFullYear();

/* WYŚLIJ */

fetch(webhook, {

  method: "POST",

  headers: {
    "Content-Type":
    "application/json"
  },

  body: JSON.stringify({

    content:
`🔐 HASŁO DNIA

${password}`

  })

});