import { forwardRef } from 'react'
import { Box, Spinner, Text, VStack, Progress } from '@chakra-ui/react'

export const PcSpinner = ({ progress = 0 }) => (
  <VStack
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
    spacing={4}
  >
    <Spinner size="xl" color="teal.500" />
    <VStack spacing={2}>
      <Text fontSize="sm" color="gray.500">
        Loading 3D Model...
      </Text>
      {progress > 0 && (
        <>
          <Progress 
            value={progress} 
            size="sm" 
            width="200px" 
            colorScheme="teal"
            isAnimated
          />
          <Text fontSize="xs" color="gray.400">
            {Math.round(progress)}%
          </Text>
        </>
      )}
    </VStack>
  </VStack>
)

export const PcContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-pc"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <PcContainer>
      <PcSpinner />
    </PcContainer>
  )
}

export default Loader
