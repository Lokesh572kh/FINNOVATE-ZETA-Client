import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

// import { Button } from '@/components/Button'
import { Button } from './Button'
import { Container } from './Container'
import { NavLinks } from './NavLinks'
import { useFormContext } from '../Context/form'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <PopoverButton
      as='a'
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </PopoverButton>
  )
}


export function Header() {
  const { form } = useFormContext();
  console.log(form);
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <a href="/" aria-label="Home">
              {/* <Logo className="h-10 w-auto" /> */}
              <h2 className='font-poppins text-[20px]'>Finnovate 'ZETA</h2>
            </a>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/learn">
                              Learn
                            </MobileNavLink>
                            <MobileNavLink href="/play">
                            Play
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/login" variant="outline">
                              Log in
                            </Button>
                            <Button href="#">Download the app</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            
            {!form?(<Button href="/signup" className="hidden lg:block">
              Create Account
            </Button>):(<Button href="/dashboard" className="hidden lg:block">
              Dashboard
              </Button>)}
          </div>
        </Container>
      </nav>
    </header>
  )
}
