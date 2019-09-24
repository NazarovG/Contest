import React from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../../../utilities/getDisplayName';

const AwardRight = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 94 137"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.50845 123.749V123.749C1.50845 123.749 4.6099 123.284 7.72511 122.858C9.22648 122.646 10.8197 122.419 11.979 122.278C13.1061 121.959 13.866 121.747 13.866 121.747C14.6649 110.004 18.5239 104.448 22.0317 101.105C23.8958 99.6459 29.224 97.1197 29.224 97.1197C29.224 100.674 29.5041 105.181 28.3034 109.555C26.9559 113.524 24.3503 118.222 18.6708 120.548C18.8522 121.126 35.5761 114.75 35.3144 114.205C34.1551 108.419 34.2148 103.997 34.7956 100.58C35.1836 96.9287 36.1271 94.3312 37.3782 92.4952C38.6753 90.6431 42.6559 86.8653 42.6559 86.8653C43.8153 90.1208 45.4016 94.1655 45.677 98.7164C45.902 101.102 45.3442 103.113 44.458 105.395C43.4548 107.574 42.1578 110.11 39.6693 111.971C39.7749 112.063 43.5145 109.518 47.1738 106.863C49.1113 105.619 50.7596 104.02 51.9534 102.849C53.1701 101.615 53.9644 100.847 53.9644 100.847C48.6683 90.8087 46.7996 83.9226 50.0663 75.0509C50.7619 73.8914 51.4415 73.2886 51.4415 73.2886C55.7458 78.0212 63.6728 86.3752 57.4079 97.3544C57.4079 97.3544 60.0548 93.7813 62.6994 90.2266C64.0286 88.4275 64.7816 86.3039 65.5805 84.882C66.3587 83.3865 66.8614 82.3949 66.8614 82.3949C58.395 74.906 54.9217 69.635 54.1549 64.976C53.3423 60.4228 54.5658 56.6887 54.5658 56.6887C60.53 60.3653 70.5597 65.5995 68.8265 77.9223C68.8265 77.9223 69.1571 76.88 69.6277 75.3017C70.1259 73.7234 70.6309 71.5515 71.1061 69.3497C71.9463 64.976 72.2907 60.4918 72.2907 60.4918C61.4092 56.3114 57.0498 51.1623 54.9171 46.876C52.8717 42.6012 53.0989 38.8326 53.0989 38.8326C59.8849 40.6571 70.7181 43.1672 72.5845 55.5889C72.5845 55.5889 72.6878 51.137 72.3458 46.6528C72.0634 42.1641 71.237 37.7904 71.237 37.7904C59.5658 36.6124 54.1067 32.9243 50.8836 29.9287C49.4626 28.3113 47.1715 23.933 47.1715 23.933C50.615 23.2888 54.8528 22.6998 59.1755 23.6684C63.4019 24.6117 67.7315 27.3105 70.1649 32.9979C70.1649 32.9979 70.0455 32.218 69.692 31.0768C69.3362 29.9862 68.877 28.5322 68.4271 27.0781C67.355 24.1561 66.2118 21.3607 66.2118 21.3607C63.8243 20.5601 60.569 18.9496 57.9267 16.0621C55.0893 13.1379 53.7601 8.81017 51.1407 0.159369C51.1407 0.124857 51.1109 0.0949477 51.0879 0.0949477H51.1407V0.0144216L51.2211 0.0949477C60.8858 -0.795441 66.8637 4.75626 68.978 9.2197C71.3081 13.9362 70.1488 18.2064 69.4395 20.2932C69.4395 20.2932 70.7641 23.2888 71.781 26.3534C72.2792 27.9064 72.7452 29.487 73.124 30.6603C73.3926 31.8613 73.5877 32.6528 73.5877 32.6528C72.922 26.1325 73.8885 20.9788 75.4495 16.0598C76.9509 11.196 79.1088 6.67738 80.0018 2.32437C80.0018 2.32437 81.1726 3.61509 82.69 5.85601C83.8815 8.14296 85.6836 11.41 86.1817 15.2062C87.6693 22.8125 85.0615 31.9948 74.5749 37.1715C74.5749 37.1715 75.4495 41.8558 75.7663 46.6551C76.1244 51.443 75.9385 56.2147 75.9385 56.2147C78.0229 43.4663 86.2736 37.2842 91.4824 30.2646C91.4824 30.2646 94.026 36.2167 92.9976 43.3812C92.054 50.5411 87.2423 58.5615 75.6607 60.8047C75.6607 60.8047 75.3187 65.6018 74.3843 70.2976C73.4408 75.0164 71.8752 79.5926 71.8752 79.5926C77.4582 67.8197 86.898 63.9222 93.8699 58.6903C93.8699 58.6903 94.7721 64.9207 91.8245 71.6964C88.9733 78.3065 82.0197 85.8299 69.9261 83.7938C69.9261 83.7938 69.389 84.8843 68.5901 86.4718C67.7062 88.0662 66.9073 90.3716 65.3784 92.2927C62.5479 96.1626 59.6852 100.021 59.6852 100.021C69.0859 91.2482 79.2419 90.719 88.055 87.6061C88.055 87.6061 87.6326 89.2051 86.5536 91.5634C85.4816 93.9469 83.7139 97.1128 81.2346 100.021C75.5436 105.308 66.9096 109.286 56.3634 103.242C56.3634 103.242 55.468 104.107 54.1572 105.393C52.9038 106.707 51.0856 108.398 49.0149 109.705C47.0544 111.127 45.0365 112.516 43.5513 113.593C42.2519 114.516 41.2602 114.969 41.0031 115.089C44.1229 114.09 46.6458 112.942 49.4236 112.703C52.0728 112.226 54.8689 112.514 57.2885 112.456C62.2127 112.514 67.0244 113.517 71.4642 113.655C71.4642 113.655 70.5207 114.967 68.7898 116.78C66.9418 118.517 64.5359 121.188 61.0304 122.541C57.5938 124.027 53.5581 124.984 49.4236 124.473C45.1651 123.742 40.7873 121.521 36.8295 117.279C37.0798 117.81 22.5712 123.275 19.5547 123.93C22.64 123.742 25.326 123.742 27.8535 124.027C30.4751 124.384 33.0119 125.14 35.3511 126.098C40.0045 127.793 44.155 130.048 48.1977 131.624C48.1977 131.624 46.9764 132.576 44.8506 133.803C42.7386 135.029 39.6808 136.4 36.0949 136.732C28.9853 137.919 20.0758 135.365 14.5616 125.09C14.5616 125.09 13.8178 125.267 12.647 125.612C11.4349 125.739 9.82564 126.003 8.22786 126.215C5.01623 126.668 1.82296 127.117 1.82296 127.117V127.071C1.79082 127.071 1.76098 127.117 1.69899 127.117C0.755475 127.117 0.000201125 126.383 0.000201125 125.433C-0.0135729 124.538 0.682013 123.834 1.50845 123.749Z"
      />
    </svg>
  );
};

AwardRight.displayName = `${getDisplayName(AwardRight)}(Icon)`;

AwardRight.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AwardRight.defaultProps = {
  width: 60,
  height: 90,
};

export default AwardRight;
