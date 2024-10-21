'use client'

import { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SearchParamsComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const code = searchParams.get("code");
        if (code) {
            router.push(`/reset-password?code=${code}`);
        }
    }, [searchParams, router]);

    return <div>Search component: No Params Found...</div>;
}

