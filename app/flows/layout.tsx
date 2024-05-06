'use client'
import * as React from 'react';
import Link from "next/link"
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Divider from '@mui/material/Divider';
import FlowTabs from '../components/tabs';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Article from '../components/article';
import Foot from '../components/footer';

interface FadeProps {
  children?: React.ReactElement;
  in?: boolean;
  onEnter?: () => void;
  onExited?: () => void;
}

function valuetext(value: number) {
   return `${value}°C`;
 }
 
 const minDistance = 10;

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
   const [open, setOpen] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const [alignment, setAlignment] = React.useState('web');
   const [value1, setValue1] = React.useState<number[]>([20, 37]);
 
   const handleChange = (
     event: React.MouseEvent<HTMLElement>,
     newAlignment: string,
   ) => {
     setAlignment(newAlignment);
   };

   const handleChange1 = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
    ) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    };

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorEl(event.currentTarget);
     setOpen((previousOpen) => !previousOpen);
   };
 
   const canBeOpen = open && Boolean(anchorEl);
   const id = canBeOpen ? 'spring-popper' : undefined;

   return (
      <>
         <nav className='w-11/12 mx-auto p-4 py-6 flex justify-between'>
            <div className="(companyName) flex justify-between text-xl font-semibold my-auto">Company Name</div>
            <div className="(actions) flex justify-between my-auto">
               <div className='mx-5'>
                  <button aria-describedby={id} type="button" onClick={handleClick}>
                     Build
                  </button>
                  <Popper id={id} open={open} anchorEl={anchorEl} transition>
                     <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                     The content of the Popper.
                     </Box>
                  </Popper>
               </div>

               <Link href={'#'} className='mx-5'>Optimize</Link>

               <div className='mx-5'>
                  <button aria-describedby={id} type="button" onClick={handleClick}>
                     Flow
                  </button>
                  <Popper id={id} open={open} anchorEl={anchorEl} transition>
                     <Box sx={{ border: 1, p: 1, bgcolor: '' }}>
                     The content of the Popper.
                     </Box>
                  </Popper>
               </div>
            </div>
            <div className="(links)">
               <Link href={'#'} className='mx-5' >Tutorials</Link>
               <Link href={'#'} className='mx-5'>Blog</Link>
               <Link href={'#'} className='mx-5'>Login</Link>

               <button className='bg-yellow-300 px-4 py-1 text-black rounded-md font-semibold'>Start Trial</button>
            </div>
         </nav>

         <section className='w-11/12 mx-auto' >
            <div className='flex'>
               <FlowTabs/>
               <Divider orientation="vertical" sx={{backgroundColor: '#ffffff6b'}} flexItem />
               <span className='text-xl font-bold my-auto mx-4'>Filters & Alerts</span>
            </div>
            <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />
            <div className='flex min-h-[70vh]'>
               <div className='w-9/12 h-full'>
                  {children}
               </div>
               <Divider orientation="vertical" sx={{backgroundColor: '#ffffff6b'}} flexItem />
               <div className='flex flex-col justify-start h-full m-6'>
                  <ToggleButtonGroup
                     color="secondary"
                     value={alignment}
                     exclusive
                     onChange={handleChange}
                     aria-label="Platform"
                  >
                     <ToggleButton value="current" sx={{textTransform: 'none', color: 'white'}}>Current Filter</ToggleButton>
                     <ToggleButton value="your filter" sx={{textTransform: 'none', color: 'white'}}>Your Filter</ToggleButton>
                  </ToggleButtonGroup>

                  <div className='flex flex-col my-1'>
                     Tickers:
                     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </div>

                  {/* SLIDER */}
                  <div>
                     Sometihing:
                     <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                  </div>
                  <div>
                     <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                     />
                  </div>
                  <FormGroup>
                     <FormControlLabel control={<Checkbox />} label=" Out of money" />
                     <FormControlLabel control={<Checkbox />} label="Volume > OI" />
                     <FormControlLabel control={<Checkbox />} label="Upcoming earnings" />
                     <FormControlLabel control={<Checkbox />} label="Above ask or below bid" />
                  </FormGroup>
               </div>
            </div>

         </section>

         <Article />
         <Foot />
      </>
   )
}





