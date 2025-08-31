<?php
header('Content-Type: application/json');

try {
    echo json_encode(['status' => 'test', 'message' => 'Handler is working']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>