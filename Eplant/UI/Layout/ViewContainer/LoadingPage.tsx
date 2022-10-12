import GeneticElement from '@eplant/GeneticElement'
import { Box, LinearProgress, Stack, Typography, useTheme } from '@mui/material'
import React, { SVGProps } from 'react'
import { ViewDataError } from '@eplant/View/viewData'
import { View } from '@eplant/View'
import FailedToLoad from '../FailedToLoad'
import NotSupported from '../ViewNotSupported'

/**
 * The svg shown while a genetic element is loading. It looks like a plant being watered by a watering can
 * @param props Props are passed directly to the SVG element
 * @returns
 */
export function LoadingImage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 659 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69692 563.002C2.67292 563.002 0.186523 565.488 0.186523 568.512C0.186523 571.536 2.67292 574.022 5.69692 574.022H607.204C610.228 574.022 612.715 571.536 612.715 568.512C612.715 565.555 610.228 563.002 607.204 563.002H156.83C157.905 541.363 159.854 523.824 162.34 509.578C181.761 508.234 241.771 502.857 259.175 485.453C274.161 470.534 272.347 447.283 269.995 417.85C269.054 405.888 268.113 393.523 268.113 380.218C268.113 377.866 266.567 375.715 264.35 374.976C262.065 374.237 259.579 375.11 258.235 376.992C258.033 377.261 235.588 407.635 191.438 407.635C178.737 407.635 168.791 411.331 161.87 418.589C147.691 433.574 149.169 460.79 150.513 484.781C150.916 491.635 151.252 498.288 151.252 504.403C151.252 505.277 151.454 506.016 151.857 506.822C148.967 522.95 146.951 541.766 145.943 563.002H128.135C127.867 523.488 124.977 493.718 120.676 471.408C120.743 465.83 121.012 459.917 121.348 453.802C122.692 429.811 124.171 402.595 109.991 387.61C103.07 380.285 93.1241 376.656 80.4233 376.656C36.4745 376.656 14.5001 347.289 13.6265 346.013C12.2153 344.064 9.72892 343.325 7.51132 343.997C5.22652 344.736 3.74812 346.819 3.74812 349.238C3.74812 362.544 2.80732 374.909 1.86652 386.938C-0.418277 416.371 -2.23268 439.555 12.6857 454.541C30.5609 472.416 93.5273 477.59 110.999 478.733C114.561 499.229 116.98 526.646 117.249 563.002H5.69692ZM169.732 426.115C174.571 421.075 181.627 418.589 191.371 418.589C223.963 418.589 245.87 404.141 257.428 393.658C257.831 402.528 258.503 410.928 259.108 418.656C261.191 445.267 262.871 466.234 251.447 477.658C238.814 490.224 190.228 496.406 164.558 498.355C171.211 468.317 180.35 456.086 186.532 451.181C192.043 446.813 196.075 447.485 196.478 447.552C199.367 448.291 202.257 446.477 203.063 443.654C203.87 440.697 202.123 437.673 199.233 436.934C198.359 436.733 190.363 434.851 180.753 441.84C172.823 447.619 166.238 457.834 160.862 472.08C160.123 453.936 160.795 435.658 169.732 426.115ZM20.2793 446.746C8.92252 435.389 10.5353 414.355 12.6185 387.744C13.2233 380.016 13.8953 371.549 14.2313 362.746C25.7897 373.094 47.6969 387.61 80.2889 387.61C90.0329 387.61 97.0889 390.096 101.927 395.136C110.327 404.006 111.47 420.605 110.999 437.741C105.355 423.965 98.9705 415.968 93.0569 411.398C83.1785 403.872 74.9129 405.821 73.9721 406.09C71.1497 406.829 69.4697 409.718 70.1417 412.608C70.8137 415.498 73.7705 417.312 76.6601 416.707C76.8617 416.64 81.1625 415.901 87.0089 420.605C93.3929 425.846 102.196 438.278 108.647 467.578C83.5145 465.763 33.1817 459.648 20.2793 446.746Z"
        fill={props.fill}
      />
      <path
        d="M210.59 267.523C165.499 267.523 128.875 304.214 128.875 349.238C128.875 352.262 131.361 354.749 134.385 354.749C137.409 354.749 139.896 352.262 139.896 349.238C139.896 310.195 171.681 278.477 210.657 278.477C213.681 278.477 216.168 275.99 216.168 272.966C216.033 269.942 213.614 267.523 210.59 267.523Z"
        fill={props.fill}
      />
      <path
        d="M95.2744 349.306C95.2744 352.33 97.7608 354.816 100.785 354.816C103.809 354.816 106.295 352.33 106.295 349.306C106.295 291.782 153.134 244.944 210.657 244.944C213.681 244.944 216.167 242.458 216.167 239.434C216.167 236.41 213.748 233.923 210.657 233.923C146.951 233.99 95.2744 285.667 95.2744 349.306Z"
        fill={props.fill}
      />
      <path
        d="M71.8893 354.749C74.9133 354.749 77.3997 352.263 77.3997 349.239C77.3997 276.931 136.2 218.199 208.44 218.199C211.464 218.199 213.95 215.712 213.95 212.688C213.95 209.664 211.464 207.178 208.44 207.178C130.085 207.178 66.3789 270.883 66.3789 349.239C66.4461 352.33 68.8653 354.749 71.8893 354.749Z"
        fill={props.fill}
      />
      <path
        d="M239.015 305.088L304.804 272.16C305.745 271.69 306.551 270.95 307.089 270.01H474.35L532.209 327.869C533.217 328.944 534.628 329.482 536.107 329.482C537.518 329.482 538.929 328.877 540.004 327.869L657.201 210.672C658.209 209.597 658.814 208.253 658.814 206.774C658.814 205.363 658.209 203.952 657.201 202.877L619.502 165.245V106.982C619.502 106.243 619.367 105.504 619.099 104.899C618.83 104.227 618.427 103.622 617.956 103.085L516.484 1.6128C514.334 -0.5376 510.839 -0.5376 508.756 1.6128L478.449 31.92L361.185 149.117C360.11 150.125 359.572 151.536 359.572 153.014C359.572 154.493 360.177 155.904 361.185 156.912L391.022 186.749L417.163 212.957H303.595L238.948 180.634C237.268 179.76 235.252 179.894 233.639 180.835C232.027 181.843 231.019 183.59 231.019 185.539V300.182C231.019 302.064 232.027 303.811 233.639 304.819C235.252 305.827 237.335 305.894 239.015 305.088ZM307.828 223.91H314.011V259.056H307.828V223.91ZM490.007 35.8176L512.519 13.2384L608.481 109.267V154.291L490.007 35.8176ZM482.279 43.5456L504.388 65.6544L394.987 175.123L372.878 153.014L482.279 43.5456ZM434.299 214.57L402.715 182.918L512.183 73.4496L610.161 171.427L645.575 206.774L536.039 316.243L480.465 260.669C479.39 259.661 478.046 259.056 476.567 259.056H324.897V223.91H430.401C432.619 223.91 434.635 222.566 435.441 220.483C436.382 218.467 435.911 216.115 434.299 214.57ZM242.039 194.41L296.875 221.827V263.894L242.039 291.312V194.41Z"
        fill={props.fill}
      />
    </svg>
  )
}

/**
 * The loading page for a view
 * @param props.loadingAmount The proportion that has already loaded
 * @param props.gene The gene for which the view is being loaded
 * @param props.view The view that is being loaded
 * @returns
 */

export default function LoadingPage(props: {
  loadingAmount: number
  gene: GeneticElement | null
  view: View
  error: ViewDataError | null
}) {
  const theme = useTheme()
  if (props.error == ViewDataError.UNSUPPORTED_GENE)
    return <NotSupported geneticElement={props.gene} view={props.view} />
  if (props.error == ViewDataError.FAILED_TO_LOAD)
    return <FailedToLoad geneticElement={props.gene} view={props.view} />
  return (
    <Stack gap={4}>
      <Typography variant="body2">
        Loading{' '}
        {props.gene
          ? props.gene.id + ' data for ' + props.view.name
          : 'Loading data for ' + props.view.name}
      </Typography>
      <LinearProgress variant="determinate" value={props.loadingAmount * 100} />
      <Box display="flex" alignItems={'center'} justifyContent={'center'}>
        <LoadingImage
          style={{
            marginTop: '48px',
            maxWidth: '100%',
            maxHeight: '300px',
          }}
          fill={theme.palette.primary.dark}
        />
      </Box>
    </Stack>
  )
}
