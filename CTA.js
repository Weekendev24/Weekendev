    // Modify the counts as per your actual numbers
    const totalProjects = 10;
    const totalCustomers = 22;

    let projectsCount = 0;
    let customersCount = 0;

    function updateCounts() {
        document.getElementById('projectsCount').textContent = projectsCount;
        document.getElementById('customersCount').textContent = customersCount;
    }

    function startCounting() {
        const countingInterval = setInterval(() => {
            if (projectsCount < totalProjects) {
                projectsCount++;
            }
            if (customersCount < totalCustomers) {
                customersCount++;
            }

            updateCounts();

            if (projectsCount === totalProjects && customersCount === totalCustomers) {
                clearInterval(countingInterval);
            }
        }, 100);
    }

    // You can trigger the counting animation based on your needs (e.g., when the section is in view)
    startCounting();
