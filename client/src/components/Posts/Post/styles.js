import { styled } from '@mui/system';

export const CardActionsContainer = styled(CardActions)({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
});

export const CardMediaStyled = styled('div')({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
});

export const Overlay = styled('div')({
    position: 'absolute',
    top: '20px',
    color: 'white',
    left: '20px', // Added left positioning
});

export const Overlay2 = styled(Overlay)({
    right: '20px',
    left: 'initial', // Reset left positioning for right overlay
});

export const Details = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
});
