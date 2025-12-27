export const generateWhatsAppLink = (productName: string) => {
    const phoneNumber = "628999999999"; // Replace with actual number
    const message = `Halo Dnot, saya mau pesan ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
