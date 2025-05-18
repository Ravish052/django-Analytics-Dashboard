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

dataTable.insert({
    data: [
        ["2023-01-01", 100, 10, 50, "Direct"],
        ["2023-01-02", 200, 20, 100, "Referral"],
        ["2023-01-03", 150, 15, 75, "Social Media"],
        ["2023-01-04", 300, 30, 150, "Search Engine"],
        ["2023-01-05", 250, 25, 125, "Direct"],
    ],
}
);