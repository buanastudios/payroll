document.addEventListener('DOMContentLoaded', function() {
    const courierData = {
        "001": {
            name: "Courier 1",
            subscription_fee: 100000,
            jobs: [
                { type: "same_day_regular", fee: 50000 },
                { type: "same_day_cargo", fee: 70000 },
                { type: "regular", fee: 40000 },
                { type: "cargo", fee: 60000 },
                { type: "direct_delivery", fee: 45000 }
            ]
        },
        "002": {
            name: "Courier 2",
            subscription_fee: 120000,
            jobs: [
                { type: "same_day_regular", fee: 55000 },
                { type: "same_day_cargo", fee: 75000 },
                { type: "regular", fee: 45000 },
                { type: "cargo", fee: 65000 },
                { type: "direct_delivery", fee: 48000 }
            ]
        }
    };

    function calculatePay(courierId) {
        const courier = courierData[courierId];
        let totalPay = courier.subscription_fee;
        courier.jobs.forEach(job => {
            totalPay += job.fee;
        });

        return totalPay;
    }

    function updatePayroll() {
        const selectedCourierId = document.getElementById('courierSelector').value;
        const totalPay = calculatePay(selectedCourierId);
        document.getElementById('totalPay').textContent = 'Total Pay: ' + totalPay;
    }

    document.getElementById('courierSelector').addEventListener('change', updatePayroll);

    // Initialize the first courier's pay
    updatePayroll();
});
