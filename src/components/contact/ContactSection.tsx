'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formValues = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      program: formData.get('program'),
      message: formData.get('message'),
    };

    console.log('Form submitted with values:', formValues);
    // Here you can add your API call or further processing
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid gap-12 lg:grid-cols-2'>
        {/* Left Column */}
        <div>
          <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
          <p className='text-gray-600 mb-8'>
            We are available for questions, feedback, or collaboration
            opportunities. Let us know how we can help!
          </p>

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Contact Details</h2>
            <div className='space-y-2'>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='font-semibold'>Contact Person:</span>

                <p className='text-base'>
                  Capt. Vivek Shanbhag, Honorary Secretary
                </p>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='font-semibold'>Call or text:</span>
                <a href='tel:+919841030880' className='hover:underline'>
                  +91 98410 30880
                </a>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='font-semibold'>Email us today:</span>
                <a
                  href='mailto:info@royalmadrasyachtclub.com'
                  className='hover:underline'
                >
                  info@royalmadrasyachtclub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className='bg-white p-6 rounded-lg shadow-sm border'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  name='phone'
                  id='phone'
                  type='tel'
                  placeholder='Enter your phone number'
                  required
                />
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                name='email'
                id='email'
                type='email'
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='program'>Program</Label>
              <Select name='program' required>
                <SelectTrigger>
                  <SelectValue placeholder='Select a program' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Leisure Sailing'>
                    Leisure Sailing
                  </SelectItem>
                  <SelectItem value='Learning Program'>
                    Learning Program
                  </SelectItem>
                  <SelectItem value='Become a Member'>
                    Become a Member
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                name='message'
                id='message'
                placeholder='Type your message here'
                className='min-h-[120px]'
                required
              />
            </div>

            <Button type='submit' className='w-full'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
