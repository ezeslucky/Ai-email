" use client"

import React from 'react'
import { Mail } from './mail';

export default function MailDashboard() {
    return (
      <Mail  
      
      defaultLayout={[20,32, 48]}
      defaultCollapsed={false}
      navCollapsedSize={4}
      />
    );
  }
  
  

