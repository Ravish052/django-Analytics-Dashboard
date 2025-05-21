const totalViewChart = document.getElementById("total-views-chart");
const revenueChart = document.getElementById("revenue-chart");
const growthRateChart = document.getElementById("growth-rate-chart");
const subscribersChart = document.getElementById("subscriber-count-chart");
const trafficSourceElement = document.getElementById("traffic-sources-chart");
const datatable = document.getElementById("datatable");


fetch("/api/total-views")
    .then((response) => response.json())
    .then((data) => {
        const viewCount = new Chart(totalViewChart, {
            type: "line",
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: "Total Views",
                        data: data.data,
                        fill: false,
                        borderColor: "#4bc0c0",
                        tension: 0.1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

const revenue = new Chart(revenueChart, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Revenue",
                data: [0, 10, 5, 2, 20, 30],
                backgroundColor: "#4bc0c0",
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const subscriberCount = new Chart(subscribersChart, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Subscribers",
                data: [0, 10, 5, 2, 20, 30],
                fill: false,
                borderColor: "#4bc0c0",
                tension: 0.1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const trafficSources = new Chart(trafficSourceElement, {
    type: "pie",
    data: {
        labels: ["Direct", "Referral", "Social Media", "Search Engine"],
        datasets: [
            {
                label: "Traffic Sources",
                data: [300, 50, 100, 150],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4bc0c0"
                ],
                hoverOffset: 4,
            },
        ],
    },
});

const dataTable = new simpleDatatables.DataTable("#datatable", {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: [
            "Date",
            "Views",
            "Subscribers",
            "Revenue",
            "Traffic Source"
        ],
    }
});

fetch("/api/dataTable-api")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data);
        dataTable.insert({data : data.data});
    })