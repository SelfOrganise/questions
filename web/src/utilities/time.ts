import { formatDistanceToNow } from "date-fns";

export function toRelativeTime(timestamp: string) {
  return formatDistanceToNow(parseInt(timestamp));
}
