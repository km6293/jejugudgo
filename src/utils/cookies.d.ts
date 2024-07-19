declare module '@/utils/cookies' {
  export function getCookie(name: string): string | null;
  export function setCookie(name: string, value: string, days?: number): void;
  export function deleteCookie(name: string): void;
}
