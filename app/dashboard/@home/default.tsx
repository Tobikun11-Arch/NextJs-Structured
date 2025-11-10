import {notFound} from 'next/navigation';

export default function DefaultSettingsFallback() {
  notFound(); // prevents 404 when slot is empty or unmatched
}
