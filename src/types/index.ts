import { ReactNode } from 'react';

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithBaseComponent<T = unknown> = T & TPropsWithChildren & TPropsWithClassName;

export type TPropsWithOnClick<T = unknown> = T & { onClick?: () => void };

export type TPropsWithAPIParams<T = unknown> = T & { [key: string]: any };
