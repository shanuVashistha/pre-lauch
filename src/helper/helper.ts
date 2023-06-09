export const formatSalary = (salary: any): string => {
    if (salary >= 1000) {
        const formattedSalary = Math.floor(salary / 1000);
        return `$${formattedSalary}k`;
    }

    return salary.toString();
}

export const formatSalaryNumber = (salary: any) => {
    return Number(salary).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}