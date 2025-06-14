'use client'
import { Box, Typography, Link } from '@mui/material'
import React from 'react'
import USChamberLogo from '../Assets/SVGs/index'

const AccessibilityPolicy = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '20px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: 'auto'
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }}>
        LinkedCreds - Business Accessibility Policy
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Purpose</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        At LinkedCreds - Business, we are committed to providing an inclusive and
        accessible platform for all users, including individuals with disabilities. Our
        goal is to ensure that everyone can fully participate in and benefit from our
        services, which include creating and sharing verifiable claims for skills,
        credentials, and experiences.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Scope</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        This policy applies to all digital services and platforms associated with
        LinkedCreds - Business, including our web-based applications and mobile
        interfaces. We are dedicated to meeting accessibility standards to provide an
        equitable experience for all users.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Accessibility Standards</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        LinkedCreds - Business adheres to the Web Content Accessibility Guidelines (WCAG)
        2.1, Level AA, to ensure our platform is usable by as many people as possible. We
        recognize that accessibility is an ongoing process and are committed to improving
        accessibility continuously.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Key Accessibility Features</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6', mt: 1 }}>
        • <strong>Screen Reader Compatibility</strong>: Our platform is compatible with
        screen readers to assist visually impaired users. <br />•{' '}
        <strong>Keyboard Navigation</strong>: All interactive features are accessible
        through keyboard navigation to support users with motor disabilities. <br />•{' '}
        <strong>Text Alternatives</strong>: We provide text alternatives for non-text
        content such as images, icons, and interactive elements. <br />•{' '}
        <strong>Adjustable Text Size</strong>: Users can resize text without loss of
        functionality or content. <br />• <strong>Color Contrast</strong>: We ensure
        sufficient color contrast between text and backgrounds to support users with
        visual impairments. <br />• <strong>Accessible Forms</strong>: All forms and
        interactive elements are designed with accessibility in mind, providing clear
        instructions and error messaging.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Testing and Auditing</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        LinkedCreds - Business conducts regular testing and auditing of its digital
        services to identify and resolve accessibility issues. We use automated testing
        tools as well as manual reviews to maintain compliance with accessibility
        standards.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>User Feedback</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        We welcome feedback from users regarding accessibility. If you encounter any
        accessibility barriers or have suggestions for improvement, please contact our
        support team at{' '}
        <Link href='mailto:support@LinkedCreds.com'>support@LinkedCreds.com</Link>. We
        strive to address all concerns promptly and ensure alternative access to our
        services when needed.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Exemptions</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        In some cases, certain components of our platform may not fully meet accessibility
        standards due to technical limitations or disproportionate burden. In such
        instances, we will provide an equally effective alternative to ensure users with
        disabilities can still access the necessary features.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Future Improvements</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        We are committed to ongoing improvements in accessibility and will continue to
        update our platform as new standards and technologies emerge. Our goal is to
        provide an accessible, user-friendly experience for all.
      </Typography>

      <Typography sx={{ fontWeight: 600 }}>Review and Revision</Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: '1.6' }}>
        This policy will be reviewed and revised regularly to ensure compliance with the
        latest accessibility standards and user needs.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mt: 4,
          pt: 2,
          borderTop: '1px solid #ccc'
        }}
      >
        <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>
          T3 Innovation Network / US Chamber of Commerce Foundation
        </Typography>
        <Box sx={{ ml: 2 }}>
          <svg
            width='54'
            height='54'
            viewBox='0 0 54 54'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='pointer-events-none hidden w-56 lg:block'
            aria-hidden='true'
          >
            <rect width='54' height='54' fill='none' />
            <path
              d='M37.386 30.57l-.929-.357.913.27c-.032-.135-.07-.27-.102-.405l16.737 5.006c0-.713-.037-1.426-.113-2.133l-16.873-3.72a11.592 11.592 0 00-.135-.4l-.113-.027.108.016c-.044-.13-.092-.254-.135-.384l16.797 2.43a18.745 18.745 0 00-.567-2.003l-16.527-1.177c-.098-.238-.2-.47-.308-.702 0-.006-.006-.006-.006-.011l16.074-.016a19.883 19.883 0 00-.767-1.464l1.442-.108c.324-.901.578-1.82.762-2.754l-3.781.562a20.941 20.941 0 00-.913-1.058c.07.075.14.15.205.226l4.705-1.053c.118-.955.167-1.922.14-2.883l-6.794 2.057a15.747 15.747 0 00-.751-.594l7.448-2.856a19.144 19.144 0 00-.513-2.862l-9.123 4.309c-.237-.13-.475-.26-.713-.378l9.42-5.325a18.634 18.634 0 00-1.161-2.683l-10.576 7.03c-.21-.07-.416-.14-.626-.205l10.45-8.11a18.577 18.577 0 00-1.76-2.344L38.3 16.367l-.502-.08L48.275 5.377A19.405 19.405 0 0046.023 3.5L35.572 16.092c-.12-.005-.238-.005-.357-.005L44.78 2.684a19.416 19.416 0 00-2.62-1.307l-9.019 14.801a3.247 3.247 0 00-.227.027h.006L40.778.885a18.678 18.678 0 00-2.84-.664L31.04 16.513c-.032.006-.07.016-.103.022L36.517.059a19.187 19.187 0 00-2.895-.005l-4.38 16.934c-.006 0-.017.006-.022.006L32.266.2c-.945.14-1.88.35-2.792.626L27.713 17.28l.546-16.027c-.427.162-.843.34-1.259.534a22.248 22.248 0 00-.978-.426l.033.902c-.119.064-.238.13-.357.2l.557 14.806-1.567-14.196c-.113.075-.221.145-.334.221L24.067.697A17.99 17.99 0 0022.02.248l.783 4.229c-.108.091-.216.183-.318.275l2.322 12.539-3.1-11.815a.965.965 0 01-.076.07c-.075.075-.146.146-.216.221L19.908.022a17.755 17.755 0 00-2.144.016L20.2 7.155c-.032.038-.06.076-.092.113-.06.076-.119.152-.173.233l3.49 10.173-4.03-9.428c-.054.08-.113.162-.167.243-.022.038-.049.07-.07.108l-3.549-8.3c-.713.13-1.42.297-2.123.508l4.797 9.277c-.06.113-.12.221-.173.335-.01.021-.022.037-.032.059l4.077 7.89-4.412-7.193-.098.21-.08.184-6.136-10.012c-.67.292-1.329.621-1.966.994l7.556 10.519c-.006.022-.016.043-.022.065-.032.102-.07.205-.097.313-.005.016-.01.038-.016.054l4.153 5.778-4.326-5.184c-.005.016-.005.027-.01.043l-.098.389L7.616 3.764c-.584.437-1.15.912-1.691 1.425l10.392 10.752-.049.335-.016.118L20 20.272l-3.808-3.402c-.016.145-.032.291-.043.437L4.407 6.804c-.48.572-.918 1.166-1.318 1.777l12.995 10.022c-.005.151-.005.302-.005.454l2.954 2.278-2.949-1.949.017.437-14.113-9.33c-.33.658-.616 1.333-.865 2.024l15.064 8.446c.016.146.032.297.054.443l1.945 1.09-1.923-.896.064.421L.503 14.612a18.16 18.16 0 00-.372 2.144l16.387 6.248.097.421.934.357-.913-.27c.033.135.07.27.103.405L0 18.91c0 .713.038 1.425.113 2.133l16.873 3.72c.044.135.087.265.136.4l.113.027-.108-.016c.043.13.092.254.135.383L.465 23.128c.15.675.34 1.345.567 2.004l16.522 1.166c.097.238.2.47.307.702 0 .005.006.005.006.01l-16.074.017c.232.497.492.983.767 1.463l-1.442.108c-.324.902-.578 1.82-.761 2.754l3.78-.561c.292.362.594.713.913 1.058-.07-.075-.135-.151-.205-.221l-4.7 1.047a19.067 19.067 0 00-.14 2.884L6.8 33.502c.243.205.497.405.75.594L.098 36.968c.097.967.27 1.923.513 2.862l9.123-4.309c.237.13.475.26.713.378l-9.414 5.325c.313.918.702 1.814 1.16 2.683l10.565-7.03c.211.07.416.14.627.205l-10.446 8.11A19.107 19.107 0 004.7 47.537l11.002-9.903.502.08L5.725 48.623A19.411 19.411 0 007.977 50.5l10.457-12.593c.119.005.238.005.356.005L9.225 51.311c.848.507 1.723.94 2.62 1.307l9.014-14.802c.076-.005.151-.016.227-.021h-.005l-7.86 15.32c.935.296 1.886.518 2.842.664l6.897-16.292c.032-.006.07-.016.103-.022l-5.58 16.476c.962.075 1.934.075 2.895.005l4.38-16.934c.006 0 .017-.006.022-.006L21.734 53.8c.945-.14 1.88-.35 2.792-.626l1.761-16.454-.545 16.027c.426-.162.842-.34 1.258-.534.324.15.648.291.978.426l-.033-.902c.12-.064.238-.13.357-.2l-.557-14.806 1.572 14.191c.113-.076.221-.146.335-.221l.286 2.597c.675.189 1.361.34 2.047.448l-.783-4.228c.108-.092.216-.184.319-.275l-2.323-12.54 3.1 11.816c.022-.022.05-.049.076-.07.076-.076.146-.146.216-.222l1.507 5.751c.713.038 1.431.033 2.144-.016L33.8 46.845c.032-.038.06-.076.092-.113.06-.076.119-.152.173-.233l-3.49-10.173 4.03 9.428c.054-.08.113-.162.167-.243.022-.038.049-.07.07-.108l3.549 8.305a19.54 19.54 0 002.123-.507l-4.797-9.277c.06-.114.12-.222.173-.335l.033-.06-4.084-7.889 4.413 7.182.097-.21.081-.184 6.147 10.022c.67-.291 1.328-.62 1.966-.993l-7.562-10.52c.006-.021.016-.043.022-.064.032-.103.07-.206.097-.314l.016-.054-4.153-5.778 4.326 5.179c.005-.016.005-.027.01-.043l.098-.389 8.988 10.762c.583-.437 1.15-.912 1.69-1.425L37.683 38.059l.049-.335.016-.118L34 33.728l3.808 3.402c.016-.145.032-.291.043-.437l11.742 10.503a18.64 18.64 0 001.318-1.777L37.916 35.397c.005-.151.005-.302.005-.454l-2.954-2.278 2.949 1.949-.017-.437 14.113 9.33c.33-.658.616-1.333.865-2.024l-15.064-8.446c-.016-.146-.032-.297-.054-.443l-1.944-1.09 1.917.896-.065-.421 15.825 7.409c.168-.708.292-1.426.373-2.144L37.483 30.99a5.92 5.92 0 00-.097-.422zm-1.582-4.245a21.33 21.33 0 00-.33-.605l14.659-2.154c.4.529.772 1.074 1.112 1.63l-15.441 1.129zm14.286-2.813c-.065-.087-.135-.173-.206-.265.07.086.14.173.206.265zm-15.966.156l10.543-4.962c.497.297.988.615 1.464.955L34.47 24.138c-.114-.157-.227-.313-.346-.47zm-.713-.89l8.275-5.493c.502.19 1.004.4 1.49.632l-9.403 5.298a9.728 9.728 0 00-.362-.438zm11.143-4.137c-.011-.006-.017-.011-.028-.016.011.005.017.01.028.016zm-4.132-1.782c-.043-.011-.087-.027-.13-.038.043.016.087.027.13.038zM21.35 32.065l-6.11 5.481a18.67 18.67 0 01-1.441-.345l7.167-5.546c.124.135.248.275.384.41zm-.762-.842l-8.27 5.492c-.501-.19-1.004-.4-1.49-.632l9.404-5.298c.113.146.232.292.356.438zm-.713-.891L9.333 35.289a21.24 21.24 0 01-1.464-.956l11.661-4.471c.114.157.227.313.346.47zm-1.35-2.052L3.867 30.434c-.4-.529-.772-1.074-1.112-1.63l15.441-1.129c.108.2.216.405.33.605zM3.91 30.488c.065.081.13.168.195.249a9.989 9.989 0 01-.195-.249zm1.2 1.415l13.745-3.062c.108.179.216.351.335.524l-12.736 3.84a17.762 17.762 0 01-1.345-1.301zm4.342 3.456c.005.006.01.006.022.011-.011 0-.017-.005-.022-.01zm4.256 1.815a1.088 1.088 0 01-.124-.038c.043.016.086.027.124.038zm11.164-.206c.076-.027.151-.048.227-.075-.076.027-.151.054-.227.075zm1.156-.415l.2-.081-.2.08zm.367-.152c.049-.021.092-.037.14-.059a1.096 1.096 0 00-.14.06zm5.974-4.039c-.438.438-.892.848-1.361 1.237l-.07-.108a8.37 8.37 0 01-.481.27l.102.2c-.15.118-.308.232-.464.345l-.119-.275-.016-.043c-.168.07-.335.135-.508.194l.027.086.13.378c-.168.114-.34.227-.508.335l-.146-.55-.021-.092a6.2 6.2 0 01-.53.118l.044.227.113.627a31.82 31.82 0 01-.583.329l-.027-.248-.092-.848a6.724 6.724 0 01-.562.043l.043 1.215.006.173c-.114.054-.227.113-.346.167a9.757 9.757 0 01-.346.157l.06-1.707a6.675 6.675 0 01-.567-.043l-.222 2.052c-.254.103-.508.195-.767.281l.443-2.42a8.356 8.356 0 01-.53-.118l-.728 2.797c-.292.087-.584.162-.875.238l1.085-3.192a8.176 8.176 0 01-.507-.194l-1.523 3.58c-.34.065-.681.119-1.021.168l2.052-3.986a6.028 6.028 0 01-.48-.27l-2.669 4.369a17.33 17.33 0 01-1.183.054l3.387-4.73a8.728 8.728 0 01-.443-.34l-4.202 5.048c-.443-.021-.886-.059-1.329-.113l5.115-5.308c-.032-.033-.07-.065-.102-.103a13.002 13.002 0 01-.27-.28.075.075 0 01-.017-.022l-.005.005a7.589 7.589 0 01.28-10.427c.438-.438.892-.848 1.362-1.237v.006l.065.108a8.37 8.37 0 01.48-.27l-.102-.2c.151-.119.308-.232.464-.346v.006l.135.313c.168-.07.335-.135.508-.195l-.054-.156-.092-.27-.01-.033c.167-.113.34-.226.507-.334l.049.178.097.367.021.092a6.2 6.2 0 01.53-.119l-.065-.346-.092-.507c.195-.114.389-.222.583-.33l.12 1.097c.188-.022.377-.038.561-.044l-.016-.415-.016-.46-.017-.507c.114-.054.227-.113.346-.167.113-.054.232-.108.346-.157l-.06 1.706c.19.006.378.022.567.044l.222-2.052c.254-.103.508-.195.767-.281l-.443 2.419c.178.032.356.076.53.119l.728-2.797c.292-.087.584-.162.875-.238l-1.09 3.186c.172.06.34.124.507.194l1.523-3.59c.34-.065.68-.12 1.02-.168l-2.051 3.985c.162.081.324.173.48.27l2.668-4.368c.395-.033.789-.049 1.183-.054l-3.386 4.73c.15.108.297.221.443.34l4.202-5.049c.443.022.885.06 1.328.114l-5.114 5.308c.032.032.07.065.102.102.092.092.184.19.27.281.006.006.011.011.016.022l6.114-5.487c.486.098.967.211 1.448.346l-7.157 5.557-.021.016a7.594 7.594 0 01-.648 9.995zm2.441-7.727l12.741-3.84a17.596 17.596 0 011.345 1.301L35.15 25.16c-.113-.179-.227-.351-.34-.524z'
              fill='currentColor'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default AccessibilityPolicy
