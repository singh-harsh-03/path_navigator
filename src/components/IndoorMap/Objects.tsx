import data from "../../assets/db.json";

interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
const get_color = (name: string) => {
  const obj = data.objects.find((obj) => obj.name === name);
  if (!obj || !obj.availability) return "white";
  return obj.availability === "yes" ? "#ccffcc" : "#ffad99";
};
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <g>
        <rect
          id="Ajanta"
          x={558}
          y={911}
          width={118}
          height={116}
          fill={get_color("Ajanta")} // Background color
        />
        <path
          id="Ajanta"
          className={`${className} object`}
          d="M558.987 911.04l116.848.003-1.024 114.297-116.619.503.795-114.803z"
          onClick={handleObjectClick}
        />
        <text
          x={596}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }} // Ensures text doesn't block clicks
        >
          Ajanta
        </text>
      </g>
      <g>
        <rect
          id="Ellora"
          x={430}
          y={911}
          width={118}
          height={116}
          fill={get_color("Ellora")} // Background color
        />
        <path
          id="Ellora"
          className={`${className} object`}
          d="M430.273 910.876l120.253.333-1.054 114.46-119.468.792.269-115.585z"
          onClick={handleObjectClick}
        />
        <text
          x={468}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Ellora
        </text>
      </g>
      <g>
        <rect
          id="Saka"
          x={303}
          y={911}
          width={118}
          height={116}
          fill={get_color("Saka")} // Background color
        />
        <path
          id="Saka"
          className={`${className} object`}
          d="M303.324 910.876l120.253.333-2.042 115.252-118.443.698.232-116.283z"
          onClick={handleObjectClick}
        />
        <text
          x={341}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Saka
        </text>
      </g>
      <g>
        <rect
          id="Elephanta"
          x={172}
          y={911}
          width={122}
          height={116}
          fill={get_color("Elephanta")} // Background color
        />
        <path
          id="Elephanta"
          className={`${className} object`}
          d="M172.029 911.04l122.833-.164-.243 116.283-122.709.667.119-116.786z"
          onClick={handleObjectClick}
        />
        <text
          x={210}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Elephanta
        </text>
      </g>
      <g>
        <rect
          id="Focus Room 4153"
          x={684}
          y={911}
          width={123}
          height={116}
          fill={get_color("Focus Room 4153")} // Background color
        />
        <path
          id="Focus Room 4153"
          className={`${className} object`}
          d="M684.126 911.04l123.189.003-1.08 114.297-122.947.503.838-114.803z"
          onClick={handleObjectClick}
        />
        <text
          x={700}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={700} dy="0">Focus Room</tspan>
          <tspan x={700} dy="16">4153</tspan>
        </text>
      </g>
      <g>
        <rect
          id="Phone room 4128"
          x={815}
          y={911}
          width={124}
          height={116}
          fill={get_color("Phone room 4128")} // Background color
        />
        <path
          id="Phone room 4128"
          className={`${className} object`}
          d="M815.849 911.04l124.416.003-1.091 114.297-124.171.503.846-114.803z"
          onClick={handleObjectClick}
        />
        <text
          x={825}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={825} dy="0">Phone Booth</tspan>
          <tspan x={825} dy="16"> 4128</tspan>
          
        </text>
      </g>
      <g>
        <rect
          id="Phone Room 4120"
          x={948}
          y={911}
          width={125}
          height={112}
          fill={get_color("Phone Room 4120")} // Background color
        />
        <path
          id="Phone Room 4120"
          className={`${className} object`}
          d="M948.369 911.04l125.087.003-1.097 112.234-124.841.494.851-112.731z"
          onClick={handleObjectClick}
        />
        <text
          x={960}
          y={970}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={960} dy="0">Phone Booth</tspan>
          <tspan x={960} dy="16">4120</tspan>
        </text>
      </g>
      <g>
        <rect
          id="Stage Area"
          x={492}
          y={554}
          width={478}
          height={286}
          fill={get_color("Stage Area")} // Background color
        />
        <path
          id="Stage Area"
          className={`${className} object`}
          d="M492.345 554.188l478.43 1.477.269 286.743-478.664-.017-.035-288.203z"
          onClick={handleObjectClick}
        />
        <text
          x={731}
          y={700}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Stage Area
        </text>
      </g>
      <g>
        <rect
          id="Phone Booth 4063"
          x={978}
          y={555}
          width={99}
          height={286}
          fill={get_color("Phone Booth 4063")} // Background color
        />
        <path
          id="Phone Booth 4063"
          className={`${className} object`}
          d="M978.726 555.123l99.437 1.533-.111 286.383-99.487-.075.161-287.841z"
          onClick={handleObjectClick}
        />
        <text
          x={999}
          y={700}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={999} dy="0">Phone Booth</tspan>
          <tspan x={999} dy="16">4063</tspan>
        </text>
      </g>
      <g>
        <rect
          id="Velha"
          x={384}
          y={554}
          width={98}
          height={89}
          fill={get_color("Velha")} // Background color
        />
        <path
          id="Velha"
          className={`${className} object`}
          d="M384.429 554.004l98.751.437.026 89.317-98.782.047.005-89.801z"
          onClick={handleObjectClick}
        />
        <text
          x={422}
          y={600}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Velha
        </text>
      </g>
      <g>
        <rect
          id="Phone Booth 4173"
          x={384}
          y={652}
          width={98}
          height={87}
          fill={get_color("Phone Booth 4173")} // Background color
        />
        <path
          id="Phone Booth 4173"
          className={`${className} object`}
          d="M384.371 652.277l98.752.081.078 87-98.883-.015.053-87.066z"
          onClick={handleObjectClick}
        />
        <text
          x={402}
          y={700}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={402} dy="0">Phone Booth</tspan>
          <tspan x={402} dy="16">4173</tspan>
          
        </text>
      </g>
      <g>
        <rect
          id="Konark"
          x={384}
          y={747}
          width={98}
          height={95}
          fill={get_color("Konark")} // Background color
        />
        <path
          id="Konark"
          className={`${className} object`}
          d="M384.263 747.018l98.933.057-.159 95.586-98.747-.047-.027-95.596z"
          onClick={handleObjectClick}
        />
        <text
          x={422}
          y={800}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Konark
        </text>
      </g>
      <g>
        <rect
          id="Bharat 4104"
          x={696}
          y={238}
          width={171}
          height={232}
          fill={get_color("Bharat 4104")} // Background color
        />
        <path
          id="Bharat 4104"
          className={`${className} object`}
          d="M696.664 238.508l171.452-.046.021 232.906-171.458-.113-.015-232.747z"
          onClick={handleObjectClick}
        />
        <text
          x={738}
          y={350}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Bharat 4104
        </text>
      </g>
      <g>
        <rect
          id="Mail room"
          x={935}
          y={239}
          width={171}
          height={232}
          fill={get_color("Mail room")} // Background color
        />
        <path
          id="Mail room"
          className={`${className} object`}
          d="M935.02 239.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
          onClick={handleObjectClick}
        />
        <text
          x={1021}
          y={350}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Mail room
        </text>
      </g>
      <g>
        <rect
          id="Nilgiri"
          x={455}
          y={246}
          width={179}
          height={104}
          fill={get_color("Nilgiri")} // Background color
        />
        <path
          id="Nilgiri"
          className={`${className} object`}
          d="M455.6 246.006l179.653-.037.12 104.876-179.822-.036.05-104.803z"
          onClick={handleObjectClick}
        />
        <text
          x={545}
          y={300}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Nilgiri
        </text>
      </g>
      <g>
        <rect
          id="Pandya"
          x={455}
          y={359}
          width={179}
          height={111}
          fill={get_color("Pandya")} // Background color
        />
        <path
          id="Pandya"
          className={`${className} object`}
          d="M455.473 359.466l179.713-.037.126 111.555-179.919-.293.08-111.225z"
          onClick={handleObjectClick}
        />
        <text
          x={545}
          y={420}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Pandya
        </text>
      </g>
      <g>
        <rect
          id="TajMahal"
          x={288}
          y={245}
          width={158}
          height={104}
          fill={get_color("TajMahal")} // Background color
        />
        <path
          id="TajMahal"
          className={`${className} object`}
          d="M288.551 245.905l158.26-.05.1 104.876-158.41-.023.05-104.803z"
          onClick={handleObjectClick}
        />
        <text
          x={368}
          y={300}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          TajMahal
        </text>
      </g>
      <g>
        <rect
          id="Pallava"
          x={288}
          y={359}
          width={158}
          height={111}
          fill={get_color("Pallava")} // Background color
        />
        <path
          id="Pallava"
          className={`${className} object`}
          d="M288.483 359.374l158.26-.059.095 111.54-158.409-.018.054-111.463z"
          onClick={handleObjectClick}
        />
        <text
          x={368}
          y={420}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Pallava
        </text>
      </g>
      <g>
        <rect
          id="Gym"
          x={271}
          y={34}
          width={144}
          height={146}
          fill={get_color("Gym")} // Background color
        />
        <path
          id="Gym"
          className={`${className} object`}
          d="M271.405 34.433l144.006-.114.19 146.272-144.281.014.085-146.172z"
          onClick={handleObjectClick}
        />
        <text
          x={343}
          y={110}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Gym
        </text>
      </g>
      <g>
        <rect
          id="Meditation Room 4035"
          x={424}
          y={34}
          width={146}
          height={146}
          fill={get_color("Meditation Room 4035")} // Background color
        />
        <path
          id="Meditation Room 4035"
          className={`${className} object`}
          d="M424.29 34.522l146.224-.113.063 146.316-146.362.01.075-146.213z"
          onClick={handleObjectClick}
        />
        <text
          x={433}
          y={110}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Meditation Room
        </text>
      </g>
      <g>
        <rect
          id="Wellness Room"
          x={579}
          y={34}
          width={170}
          height={146}
          fill={get_color("Wellness Room")} // Background color
        />
        <path
          id="Wellness Room"
          className={`${className} object`}
          d="M579.065 34.617l170.852-.098.088 146.316-171.013-.004.073-146.214z"
          onClick={handleObjectClick}
        />
        <text
          x={604}
          y={110}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Wellness Room
        </text>
      </g>
      <g>
        <rect
          id="Storage 4060"
          x={758}
          y={34}
          width={155}
          height={146}
          fill={get_color("Storage 4060")}
        />
        <path
          id="Storage 4060"
          className={`${className} object`}
          d="M758.677 34.72l155.194-.108.072 146.316-155.34.005.074-146.214z"
          onClick={handleObjectClick}
        />
        <text
          x={788}
          y={110}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Storage 4060
        </text>
      </g>

      <g>
        <rect
          id="Champaner"
          x={922}
          y={34}
          width={174}
          height={146}
          fill={get_color("Champaner")}
        />
        <path
          id="Champaner"
          className={`${className} object`}
          d="M922.523 34.818l174.226-.096.09 146.317-174.39-.006.074-146.215z"
          onClick={handleObjectClick}
        />
        <text
          x={1000}
          y={110}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Champaner
        </text>
      </g>
      <g>
        <rect
          id="SunderBans"
          x={1105}
          y={34}
          width={155}
          height={146}
          fill={get_color("SunderBans")}
        />
        
      <path
        id="SunderBans"
        className={`${className} object`}
        d="M1105.14 34.92l155.263-.107.07 146.317-155.407.005.074-146.215z"
        onClick={handleObjectClick}
      />
      <text x={1160} y={110} fontSize="14" fill="black" fontFamily="Arial, sans-serif" style={{ pointerEvents: "none" }}>SunderBans</text>
      </g>
      <g>
        <rect
          id="Mahabalipuram"
          x={1269}
          y={34}
          width={105}
          height={146}
          fill={get_color("Mahabalipuram")}
        />
      <path
        id="Mahabalipuram"
        className={`${className} object`}
        d="M1269.109 35.006l105.412-.136.02 146.317-105.51.034.078-146.215z"
        onClick={handleObjectClick}
      />
      <text x={1280} y={110} fontSize="14" fill="black" fontFamily="Arial, sans-serif" style={{ pointerEvents: "none" }}>Mahabalipuram</text>
      </g>
      
      <path
        id="Small Cafeteria"
        className={`${className} object`}
        d="M1244.815 412.508l179.773.266-.04 128.337-179.694-.064-.04-128.539z"
        onClick={handleObjectClick}
      />

      <g>
        <rect
          id="Manoranjan Room"
          x={1244.728}
          y={549.605}
          width={98}
          height={183}
          fill={get_color("Manoranjan Room")}
        />
        <path
          id="Manoranjan Room"
          className={`${className} object`}
          d="M1244.728 549.605l98.037.282.177 183.25-98.255-4.044.041-179.488z"
          onClick={handleObjectClick}
        />
        <text
          x={1250}
          y={640}
          fontSize="14"
          fill="black"
          fontFamily="Arial, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          <tspan x={1250} dy="0">Manoranjan</tspan>
          <tspan x={1250} dy="16">Room</tspan>
        </text>
      </g>

      <path
        id="IT support"
        className={`${className} object`}
        d="M1244.509 737.562l98.428 4.068-.193 189.675-98.283-.602.048-193.141z"
        onClick={handleObjectClick}
      />
      <path
        id="Reception"
        className={`${className} object`}
        d="M33.225 368.014l158.276-.11.083 265.887-158.45-.03.091-265.747z"
        onClick={handleObjectClick}
      />
      <path
        id="washroom2"
        className={`${className} object`}
        d="M1305.166 292.446l119.546.21-.043 111.717-119.492-.035-.011-111.892z"
        onClick={handleObjectClick}
      />
      <path
        id="washroom1"
        className={`${className} object`}
        d="M151.579 34.324l111.218-.134.127 146.349-111.43.033.085-146.248z"
        onClick={handleObjectClick}
      />
      <ellipse
        id="Entrance"
        cx={1157.655}
        cy={1072.459}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;
