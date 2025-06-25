import axios, { AxiosError } from "axios"
interface ContactFormData {
    email: string;
    name: string;
    message: string
}
export const sendMail = async (fromData: ContactFormData) => {
    try {
        const response = await axios.post("/api/send-email", fromData)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Failed to send message', error.response?.data);
            return {
                success: false,
                message: error.response?.data?.message || "Something went wrong",
            };
        }
    }

}
