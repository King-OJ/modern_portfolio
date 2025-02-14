"use client"
import { useToast } from '@/hooks/use-toast';
import React from 'react'
import { Button } from './ui/button';
import { Copy } from 'lucide-react';

function CopyEmailButton() {
    const email = "clementojigs@hotmail.com"
    const { toast } = useToast();

    const handleCopyEmail = ()=>{
        navigator.clipboard.writeText(email)
        .then(()=>{
            toast({ title: "Email copied!" })
        })
        .catch((error) => {
        console.error('Error copying email: ', error);
      })
    }
  return (
   <Button size={"sm"} variant={"ghost"} className="bg-background" onClick={handleCopyEmail}>
            Copy Email <Copy />
          </Button>
  )
}

export default CopyEmailButton