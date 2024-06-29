import { authority } from '@/mocks/authority';
import { community } from '@/mocks/community';
import { course } from '@/mocks/course';
import { inquiry } from '@/mocks/inquiry';
import { review } from '@/mocks/review';
import { user } from '@/mocks/user';

export function setupMocks() {
  authority();
  community();
  course();
  inquiry();
  review();
  user();
}

setupMocks();
