import { formatDistanceToNow } from "date-fns";
export const formattedDate = (date) =>{
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}