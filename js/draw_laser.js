/*
grid_flag:{
blank:0
block:1
mirro_1(平面镜):2
mirro_2(45度镜):3
mirro_3(透镜):4
target:5
}

*/
//横坐标格子，纵坐标格子
var grid_size = 36;
grid_flag = new Array([226]);
for(i = 1;i < 226;i++){
	grid_flag[i] = 0;
}
function draw_laser(light_x,light_y,angle,light_color)
{
	var temp_angle;
	light_angle_x = convert_x(angle);
	light_angle_y = convert_y(angle);
	if(judge_edge(light_x ,light_y ,light_angle_x,light_angle_y) == true){		
		draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
		return;
	}
	switch(grid_flag[(light_x + light_angle_x)*15+ light_y + light_angle_y]){
		case 0:
			draw_laser_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			draw_laser(light_x + light_angle_x,light_y + light_angle_y,angle,light_color);
		break;
		case 1:
			draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
		break;
		case 2:
			draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			temp_angle = reflect_angle(angle,mirro_1.angle);
			t_x = convert_x(temp_angle);
			t_y = convert_y(temp_angle);
			draw_laser(light_x + t_x,light_y + t_y,temp_angle,light_color);
		break;
		case 3:
			draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			temp_angle = reflect_angle(angle,mirro_2.angle);
			t_x = convert_x(temp_angle);
			t_y = convert_y(temp_angle);
			draw_laser(light_x + t_x,light_y + t_y,temp_angle,light_color);
		break;
		case 4:
			draw_laser_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			draw_laser(light_x + light_angle_x,light_y + light_angle_y,angle,light_color);
			draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			temp_angle = reflect_angle(angle,mirro_1.angle);
			t_x = convert_x(temp_angle);
			t_y = convert_y(temp_angle);
			draw_laser(light_x + t_x,light_y + t_y,temp_angle,light_color);
		break;
		case 5:
			draw_laser_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color);
			if(same_color(target[light_x + light_angle_x][light_y + light_angle_y],light_color))	light_target(light_x + light_angle_x,light_y + light_angle_y,light_color);
			draw_laser(light_x + light_angle_x,light_y + light_angle_y,angle,light_color);
		break;
		default:
		alert("I am sorry");
	}
}

function draw_laser_line(ini_x,ini_y,tar_x,tar_y,light_color){
	var ct = document.getElementById("game_canvas");
	var cxt = ct.getContext("2d");
	cxt.strokeStyle = light_color;
	cxt.moveTo(0.5 + (ini_x - 0.5) * grid_size,0.5 + (ini_y - 0.5) * grid_size);
	cxt.lineTo(0.5 + (tar_x - 0.5) * grid_size,0.5 + (tar_y - 0.5) * grid_size);
	cxt.stroke();
}

function draw_edge_line(light_x,light_y,light_x + light_angle_x,light_y + light_angle_y,light_color){
	var ct = document.getElementById("game_canvas");
	var cxt = ct.getContext("2d");
	cxt.strokeStyle = light_color;
	cxt.moveTo(0.5 + (ini_x - 0.5) * grid_size,0.5 + (ini_y - 0.5) * grid_size);
	cxt.lineTo(0.5 + (tar_x - 0.5) * grid_size/2,0.5 + (tar_y - 0.5) * grid_size/2);
	cxt.stroke();
}

bool function judge_edge(x,y,ang_x,ang_y){
	if((x+ang_x) < 0||(y+ang_y) < 0)	return true;
	return false;
}

bool function same_color(target,light_color){
	if(target.color == light_color)	return true;
	return false;
}

function reflect_angle(l_ang,m_ang)
{
	var angle;
	var abs;
	abs = l_ang - m_ang;
	if(abs > 180)	abs -= 360;
	if(abs < 0){
		if(abs < -180)	abs += 360;
		else{
			abs *= -1;
		}
	}
	if(abs <= 90){
		return -1;
	}
	else{
		angle = 180 + 2 * m_ang - l_ang;
		if(angle > 360)	angle -=360;
		if(angle > 360) angle -= 360;
		return angle;
	}
	
}



function convert_x(angle){
	switch(angle){
		case 0,360,45,315:
			return 1;
			break;
		case 90,270:
			return 0;
			break;
		case 135,180,225:
			return -1;
	}
}
function convert_y(angle){
	switch(angle){
		case 45,90,135:
			return 1;
			break;
		case 0,180,360:
			return 0;
			break;
		case 225,270,315:
			return -1;
	}
}



