" use client"

import React from 'react'
import { Mail } from './mail';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default function MailDashboard() {
  const { userId } = auth()
  if (userId) {
      return redirect('/mail')
  }
    return (
      <Mail  
      
      defaultLayout={[20,32, 48]}
      defaultCollapsed={false}
      navCollapsedSize={4}
      />
    );
  }
  
  

