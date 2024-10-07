import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { IconArrowBack } from "@tabler/icons-react";

const GoBack = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <IconArrowBack className='hover:cursor-pointer' onClick={onClick}>back</IconArrowBack>
  );
}

export default GoBack;