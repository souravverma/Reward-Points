

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Sourav",
          amt: 120,
          transactionDt: "07-01-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 75,
          transactionDt: "07-21-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 94,
          transactionDt: "07-21-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 10,
          transactionDt: "06-01-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 75,
          transactionDt: "06-21-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 200,
          transactionDt: "08-01-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 1,
          transactionDt: "08-04-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 80,
          transactionDt: "08-03-2021"
        },
        {
          custid: 1,
          name: "Sourav",
          amt: 224,
          transactionDt: "08-10-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 125,
          transactionDt: "07-01-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 75,
          transactionDt: "07-21-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 10,
          transactionDt: "06-01-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 75,
          transactionDt: "06-21-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 200,
          transactionDt: "08-01-2021"
        },
        {
          custid: 2,
          name: "Gourav",
          amt: 224,
          transactionDt: "08-21-2021"
        },
        {
          custid: 3,
          name: "Sonia",
          amt: 120,
          transactionDt: "06-21-2021"
        }
    ]
  );
};