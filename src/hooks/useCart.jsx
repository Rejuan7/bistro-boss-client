import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email], // Potential issue here
        queryFn: async () => {
            // Ensure user is defined before accessing user.email
            if (!user || !user.email) {
                return [];
            }
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    });

    return [cart, refetch];
};

export default useCart;
