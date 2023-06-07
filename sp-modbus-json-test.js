modbus = require('./sp-modbus-json');
modbus.console("192.168.1.54", "502", "1000", "em_300");
modbus.console("192.168.1.200", "1502", "1000", "se_inverter");
modbus.console("192.168.1.101", "502", "1000", "ecu_c_v101");
modbus.console("192.168.1.111", "502", "1000", "ecu_c_v111");
modbus.console("192.168.1.123", "502", "1000", "ecu_c_v123");
